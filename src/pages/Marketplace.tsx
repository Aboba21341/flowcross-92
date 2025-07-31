import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import ModuleMarketplace from "@/components/ModuleMarketplace";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => navigate("/"), 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto glass-effect">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Module Marketplace
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="mt-4">
          <ModuleMarketplace />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Marketplace;