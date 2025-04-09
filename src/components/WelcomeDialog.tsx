
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'framer-motion';

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGuestNameSet: (name: string) => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ 
  open, 
  onOpenChange, 
  onGuestNameSet 
}) => {
  const [guestName, setGuestName] = useState('');

  const handleSubmit = () => {
    const finalName = guestName.trim() || 'My Guest';
    onGuestNameSet(finalName);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            What name shall I call you?
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          <Input
            placeholder="My Guest"
            className="w-full text-center text-lg py-6"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            autoFocus
          />
        </div>
        
        <div className="flex justify-center gap-4 mt-2">
          <Button onClick={handleSubmit} className="bg-indigo-500 hover:bg-indigo-600 px-8">
            OK
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => {
              onGuestNameSet('My Guest');
              onOpenChange(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog;
