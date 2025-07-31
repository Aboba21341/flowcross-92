import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, X, Tag, FileCheck, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ModuleUploadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModuleUploadForm = ({ isOpen, onClose }: ModuleUploadFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tags: [] as string[],
    file: null as File | null
  });
  const [newTag, setNewTag] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      if (files[0].name.endsWith('.flowmodule')) {
        setFormData(prev => ({ ...prev, file: files[0] }));
      } else {
        toast({
          title: "Неверный формат файла",
          description: "Пожалуйста, загрузите файл с расширением .flowmodule",
          variant: "destructive"
        });
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.name.endsWith('.flowmodule')) {
        setFormData(prev => ({ ...prev, file }));
      } else {
        toast({
          title: "Неверный формат файла",
          description: "Пожалуйста, загрузите файл с расширением .flowmodule",
          variant: "destructive"
        });
      }
    }
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.file) {
      toast({
        title: "Заполните все поля",
        description: "Название, описание и файл модуля обязательны",
        variant: "destructive"
      });
      return;
    }

    // Симуляция загрузки
    toast({
      title: "Модуль загружается...",
      description: "Ваш модуль обрабатывается и скоро появится в магазине"
    });

    setTimeout(() => {
      toast({
        title: "Модуль успешно загружен! 🎉",
        description: `"${formData.name}" отправлен на модерацию`
      });
      onClose();
      setFormData({ name: "", description: "", tags: [], file: null });
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-effect max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Upload className="w-6 h-6 text-primary" />
            Загрузка модуля FlowCross
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <Card className="border-dashed border-2 border-border/50">
            <CardContent className="p-6">
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? "border-primary bg-primary/5" : "border-border"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  accept=".flowmodule"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {formData.file ? (
                  <div className="flex items-center justify-center gap-2">
                    <FileCheck className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="font-medium">{formData.file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Загрузите файл модуля</p>
                    <p className="text-sm text-muted-foreground">
                      Перетащите .flowmodule файл сюда или кликните для выбора
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Module Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Название модуля *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Введите название вашего модуля"
                className="glass-effect"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Описание *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Опишите функциональность и особенности вашего модуля"
                className="glass-effect resize-none"
                rows={4}
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium mb-2">Теги</label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Добавить тег"
                  className="glass-effect"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag} size="sm" variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              
              {formData.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Guidelines */}
          <Card className="bg-muted/20">
            <CardHeader>
              <CardTitle className="text-sm">Рекомендации по загрузке</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Убедитесь, что модуль протестирован и работает корректно</p>
              <p>• Добавьте подробное описание функциональности</p>
              <p>• Используйте теги для лучшего поиска модуля</p>
              <p>• Модерация может занять 24-48 часов</p>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Отмена
            </Button>
            <Button type="submit" variant="glow" className="flex-1">
              Загрузить модуль
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ModuleUploadForm;