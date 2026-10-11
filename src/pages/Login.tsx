import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, Info } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.password) e.password = "Password is required.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Frontend-only — no real authentication
    // This form validates fields but does not authenticate users or create sessions.
    alert("Login is not yet enabled. Authentication requires a backend integration.");
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <>
      <Helmet>
        <title>Login — Zervitra</title>
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

          <h1 className="text-2xl font-bold text-foreground text-center mb-2">Welcome back</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Sign in to your Zervitra account</p>

          {/* Notice */}
          <div className="flex items-start gap-2.5 bg-primary/5 border border-primary/15 rounded-xl p-4 mb-7">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Account authentication is not yet enabled. This form validates required fields only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="space-y-1.5">
              <Label htmlFor="login-email" className="text-foreground/80 text-sm">
                Email <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <Input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                aria-describedby={errors.email ? "login-email-err" : undefined}
                aria-invalid={!!errors.email}
                className="bg-background/50 border-border/30 focus:border-primary/50 rounded-xl"
              />
              {errors.email && (
                <p id="login-email-err" role="alert" className="text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="login-password" className="text-foreground/80 text-sm">
                Password <span className="text-destructive" aria-hidden="true">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  aria-describedby={errors.password ? "login-pw-err" : undefined}
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
                <p id="login-pw-err" role="alert" className="text-xs text-destructive">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 font-semibold text-base transition-all duration-300"
            >
              Sign In
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline underline-offset-2 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
