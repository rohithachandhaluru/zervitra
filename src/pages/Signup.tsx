import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, Info } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.password) e.password = "Password is required.";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
    if (!form.confirmPassword) e.confirmPassword = "Please confirm your password.";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Frontend-only — no real account creation or password storage.
    // Passwords are never sent to a server or persisted in any storage.
    alert("Account creation is not yet enabled. Registration requires a backend integration.");
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <>
      <Helmet>
        <title>Sign Up — Zervitra</title>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-16">
        {/* Back link */}
        <div className="w-full max-w-md mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </button>
        </div>

        <div className="w-full max-w-md premium-glass rounded-3xl p-8 border border-white/5">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="/zervimain.svg" alt="Zervitra" className="h-10 w-auto" />
          </div>

          <h1 className="text-2xl font-bold text-foreground text-center mb-2">Create an account</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Join Zervitra — it only takes a minute</p>

          {/* Notice */}
          <div className="flex items-start gap-2.5 bg-primary/5 border border-primary/15 rounded-xl p-4 mb-7">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Account creation is not yet enabled. This form validates required fields only — no data is stored or transmitted.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label htmlFor="signup-name" className="text-foreground/80 text-sm">
                Full Name <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <Input
                id="signup-name"
                type="text"
                placeholder="Jane Smith"
                autoComplete="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                aria-describedby={errors.name ? "signup-name-err" : undefined}
                aria-invalid={!!errors.name}
                className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl"
              />
              {errors.name && (
                <p id="signup-name-err" role="alert" className="text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="signup-email" className="text-foreground/80 text-sm">
                Email <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                aria-describedby={errors.email ? "signup-email-err" : undefined}
                aria-invalid={!!errors.email}
                className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl"
              />
              {errors.email && (
                <p id="signup-email-err" role="alert" className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="signup-password" className="text-foreground/80 text-sm">
                Password <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  aria-describedby={errors.password ? "signup-pw-err" : undefined}
                  aria-invalid={!!errors.password}
                  className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p id="signup-pw-err" role="alert" className="text-xs text-destructive">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <Label htmlFor="signup-confirm" className="text-foreground/80 text-sm">
                Confirm Password <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="signup-confirm"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  aria-describedby={errors.confirmPassword ? "signup-confirm-err" : undefined}
                  aria-invalid={!!errors.confirmPassword}
                  className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p id="signup-confirm-err" role="alert" className="text-xs text-destructive">{errors.confirmPassword}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 font-semibold text-base transition-all duration-300"
            >
              Create Account
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline underline-offset-2 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
