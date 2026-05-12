import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, X, CalendarCheck, Loader2 } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  "School Management Solutions",
  "Bulk SMS Services",
  "Payroll & HR Systems",
  "Website Design & Hosting",
  "ICT Support & Consultancy",
  "Biometric & Attendance Systems",
  "Not sure yet",
];

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  organization: z.string().min(2, "Organization name is required"),
  phone: z.string().min(9, "A valid phone number is required"),
  email: z.string().email("A valid email is required"),
  service: z.string().min(1, "Please select a service"),
});

type FormValues = z.infer<typeof formSchema>;

export function DemoModal() {
  const { open, closeModal } = useDemoModal();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", organization: "", phone: "", email: "", service: "" },
  });

  async function onSubmit(values: FormValues) {
    setSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Server error");
      toast({
        title: "Demo Request Sent!",
        description: `Thanks ${values.name}, we'll be in touch shortly to schedule your demo.`,
      });
      form.reset();
      closeModal();
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            data-testid="modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
              initial={{ scale: 0.93, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              data-testid="modal-demo"
            >
              {/* Header */}
              <div className="bg-primary px-8 py-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <CalendarCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold font-heading text-xl leading-tight">
                      Request a Demo
                    </h2>
                    <p className="text-slate-300 text-sm mt-0.5">
                      We'll reach out within one business day.
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors mt-1"
                  data-testid="button-close-demo-modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <div className="px-8 py-7">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Mwangi"
                                className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-accent"
                                data-testid="input-demo-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Organization</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="St. Mary's School"
                                className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-accent"
                                data-testid="input-demo-organization"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+254 7XX XXX XXX"
                                className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-accent"
                                data-testid="input-demo-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jane@school.ac.ke"
                                className="h-11 bg-slate-50 border-slate-200 focus-visible:ring-accent"
                                data-testid="input-demo-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700">Service of Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger
                                className="h-11 bg-slate-50 border-slate-200 focus:ring-accent"
                                data-testid="select-demo-service"
                              >
                                <SelectValue placeholder="Select a service..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>
                                  {s}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full h-12 bg-accent hover:bg-accent/90 text-white rounded-xl text-base font-semibold mt-2 disabled:opacity-70"
                      data-testid="button-submit-demo"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
