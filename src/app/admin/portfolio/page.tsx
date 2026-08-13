'use client';

import { useState } from 'react';
import { portfolioItems, type PortfolioItem, categoryLabels, roleLabels, statusLabels } from '@/lib/portfolio';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  GripVertical,
  Upload,
  Save,
  ArrowLeft,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioAdminPage() {
  const [items, setItems] = useState<PortfolioItem[]>(portfolioItems);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [draggedItem, setDraggedItem] = useState<PortfolioItem | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    titleNl: '',
    category: 'motor' as PortfolioItem['category'],
    status: 'realized' as PortfolioItem['status'],
    lengthRange: '',
    year: '',
    role: 'design' as PortfolioItem['role'],
    image: '',
    featured: false,
    published: true,
  });

  const resetForm = () => {
    setFormData({
      title: '',
      titleNl: '',
      category: 'motor',
      status: 'realized',
      lengthRange: '',
      year: '',
      role: 'design',
      image: '',
      featured: false,
      published: true,
    });
    setEditingItem(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingItem) {
      setItems(items.map(item =>
        item.id === editingItem.id
          ? { ...item, ...formData }
          : item
      ));
    } else {
      const newItem: PortfolioItem = {
        id: formData.title.toLowerCase().replace(/\s+/g, '-'),
        ...formData,
      };
      setItems([newItem, ...items]);
    }

    resetForm();
    setIsAddDialogOpen(false);
  };

  const handleEdit = (item: PortfolioItem) => {
    setFormData({
      title: item.title,
      titleNl: item.titleNl || '',
      category: item.category,
      status: item.status,
      lengthRange: item.lengthRange || '',
      year: item.year || '',
      role: item.role || 'design',
      image: item.image,
      featured: item.featured || false,
      published: item.published,
    });
    setEditingItem(item);
    setIsAddDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const togglePublished = (id: string) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, published: !item.published }
        : item
    ));
  };

  const toggleFeatured = (id: string) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, featured: !item.featured }
        : item
    ));
  };

  const handleDragStart = (item: PortfolioItem) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent, targetItem: PortfolioItem) => {
    e.preventDefault();
    if (!draggedItem || draggedItem.id === targetItem.id) return;

    const draggedIndex = items.findIndex(i => i.id === draggedItem.id);
    const targetIndex = items.findIndex(i => i.id === targetItem.id);

    const newItems = [...items];
    newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/en"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-2xl">Portfolio Manager</h1>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={(open) => {
            setIsAddDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingItem ? 'Edit Project' : 'Add New Project'}
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title (EN)</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="titleNl">Title (NL)</Label>
                    <Input
                      id="titleNl"
                      value={formData.titleNl}
                      onChange={(e) => setFormData({ ...formData, titleNl: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as PortfolioItem['category'] })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="motor">Motor Yacht</option>
                      <option value="sailing">Sailing Yacht</option>
                      <option value="tender">Tender / Sloop</option>
                      <option value="work">Workboat</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as PortfolioItem['status'] })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="realized">Realized Project</option>
                      <option value="concept">Concept</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="lengthRange">Length</Label>
                    <Input
                      id="lengthRange"
                      value={formData.lengthRange}
                      onChange={(e) => setFormData({ ...formData, lengthRange: e.target.value })}
                      placeholder="e.g., 12m"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="e.g., 2024"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value as PortfolioItem['role'] })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="design">Design</option>
                      <option value="naval">Naval Architecture</option>
                      <option value="structural">Structural Engineering</option>
                      <option value="complete">Complete Design</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Image URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      placeholder="https://..."
                      required
                    />
                    <Button type="button" variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                  {formData.image && (
                    <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-md bg-muted">
                      <Image
                        src={formData.image}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="h-4 w-4 rounded border-input"
                    />
                    <span className="text-sm">Featured on homepage</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="h-4 w-4 rounded border-input"
                    />
                    <span className="text-sm">Published</span>
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      resetForm();
                      setIsAddDialogOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="gap-2">
                    <Save className="h-4 w-4" />
                    {editingItem ? 'Update' : 'Add'} Project
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 md:grid-cols-5">
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Total Projects</p>
              <p className="text-3xl">{items.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Realized</p>
              <p className="text-3xl">{items.filter(i => i.status === 'realized').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Concepts</p>
              <p className="text-3xl">{items.filter(i => i.status === 'concept').length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Featured</p>
              <p className="text-3xl">{items.filter(i => i.featured).length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">Drafts</p>
              <p className="text-3xl">{items.filter(i => !i.published).length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Items */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Portfolio Items</CardTitle>
            <p className="text-sm text-muted-foreground">
              Drag to reorder. Click to edit. Changes are saved automatically.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item)}
                  onDragOver={(e) => handleDragOver(e, item)}
                  onDragEnd={handleDragEnd}
                  className={`flex items-center gap-4 rounded-md border bg-background p-4 transition-all ${
                    draggedItem?.id === item.id ? 'opacity-50' : ''
                  } ${!item.published ? 'opacity-60' : ''}`}
                >
                  <button className="cursor-grab text-muted-foreground hover:text-foreground">
                    <GripVertical className="h-5 w-5" />
                  </button>

                  <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium truncate">{item.title}</h3>
                      <Badge variant={item.status === 'realized' ? 'default' : 'secondary'} className="text-xs">
                        {item.status === 'realized' ? 'Realized' : 'Concept'}
                      </Badge>
                      {item.featured && (
                        <Badge variant="outline" className="text-xs border-primary text-primary">Featured</Badge>
                      )}
                      {!item.published && (
                        <Badge variant="outline" className="text-xs">Draft</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {[
                        categoryLabels.en[item.category],
                        item.lengthRange,
                        item.role ? roleLabels.en[item.role] : undefined,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFeatured(item.id)}
                      title={item.featured ? 'Remove from featured' : 'Add to featured'}
                    >
                      {item.featured ? (
                        <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePublished(item.id)}
                      title={item.published ? 'Unpublish' : 'Publish'}
                    >
                      {item.published ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Guide</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-muted-foreground">
            <ul className="space-y-2">
              <li><strong>Add a project:</strong> Click "Add Project" and fill in the details. Set status to "Realized" for built projects or "Concept" for design studies.</li>
              <li><strong>Reorder:</strong> Drag items by the handle on the left to change their order.</li>
              <li><strong>Feature:</strong> Click the star icon to feature a project on the homepage.</li>
              <li><strong>Publish/Unpublish:</strong> Click the eye icon to toggle visibility.</li>
              <li><strong>Edit:</strong> Click the pencil icon to edit project details.</li>
              <li><strong>Delete:</strong> Click the trash icon to remove a project.</li>
            </ul>
            <p className="mt-4 text-sm">
              Note: In production, this would connect to a database or CMS. Currently, changes are stored in memory.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
