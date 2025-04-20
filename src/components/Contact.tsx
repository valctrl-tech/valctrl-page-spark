import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#E5DEFF] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#8E9196] text-lg">
              Ready to take control of your value? Let's talk about how we can help.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#E5DEFF]">
                  First Name
                </label>
                <Input 
                  placeholder="John"
                  className="bg-[#2A2F3D] border-[#7E69AB]/20 text-[#E5DEFF] placeholder:text-[#8E9196]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#E5DEFF]">
                  Last Name
                </label>
                <Input 
                  placeholder="Doe"
                  className="bg-[#2A2F3D] border-[#7E69AB]/20 text-[#E5DEFF] placeholder:text-[#8E9196]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#E5DEFF]">
                Email
              </label>
              <Input 
                type="email"
                placeholder="john@example.com"
                className="bg-[#2A2F3D] border-[#7E69AB]/20 text-[#E5DEFF] placeholder:text-[#8E9196]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#E5DEFF]">
                Message
              </label>
              <Textarea 
                placeholder="Tell us about your needs..."
                className="bg-[#2A2F3D] border-[#7E69AB]/20 text-[#E5DEFF] placeholder:text-[#8E9196] min-h-[150px]"
              />
            </div>

            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-lg py-6 h-auto">
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 