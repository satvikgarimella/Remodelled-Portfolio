
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="glass-card p-6">
      <h4 className="text-xl font-medium mb-6">Contact Information</h4>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a href="mailto:satvikgarimella2@gmail.com" className="text-foreground hover:text-blue-500 transition-colors">
              satvikgarimella2@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <a href="tel:6478044968" className="text-foreground hover:text-blue-500 transition-colors">
              647-804-4968
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-foreground/70" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="text-foreground">
              Toronto, Canada
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-border">
        <h5 className="text-sm font-medium mb-4">Connect With Me</h5>
        <div className="flex gap-4">
          <a 
            href="https://github.com/satvikgarimella" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/satvik-garimella-10049201" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/50 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="http://satviksg.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent/50 transition-colors"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
