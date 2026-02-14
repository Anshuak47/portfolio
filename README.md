# portfolio

My portfolio

# Header completed

# Next - Logo

@theme {
/_ Brand _/
--color-primary: #2563eb;
--color-primary-hover: #1d4ed8;
--color-secondary: #0f172a;
--color-accent: #22c55e;

/_ Neutrals _/
--color-bg: #ffffff;
--color-surface: #f8fafc;
--color-border: #e2e8f0;
--color-text: #0f172a;
--color-text-muted: #64748b;

/_ Status _/
--color-success: #16a34a;
--color-warning: #f59e0b;
--color-danger: #dc2626;

/_ Radius _/
--radius-sm: 0.375rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;

/_ Layout _/
--container-max: 1200px;
}

<!-- Base -->

@layer base {
body {
@apply bg-[var(--color-bg)]
text-[var(--color-text)]
text-sm md:text-base
leading-relaxed;
}

h1 {
@apply text-3xl md:text-4xl lg:text-5xl
font-bold tracking-tight;
}

h2 {
@apply text-2xl md:text-3xl lg:text-4xl
font-semibold tracking-tight;
}

h3 {
@apply text-xl md:text-2xl
font-semibold;
}

p {
@apply text-[var(--color-text-muted)]
text-sm md:text-base;
}

a {
@apply text-[var(--color-primary)]
underline-offset-4
hover:underline;
}
}

<!-- Components -->

@layer components {
.container {
@apply mx-auto
px-4 sm:px-6 lg:px-8;
max-width: var(--container-max);
}

.container-sm {
max-width: 768px;
}

.container-lg {
max-width: 1400px;
}
}

<!-- Buttons -->

@layer components {
.btn {
@apply inline-flex items-center justify-center gap-2
px-4 py-2 md:px-5 md:py-2.5
text-sm md:text-base
font-medium
rounded-[var(--radius-md)]
transition-colors
focus:outline-none
focus:ring-2 focus:ring-offset-2;
}

.btn-primary {
@apply bg-[var(--color-primary)] text-white
hover:bg-[var(--color-primary-hover)]
focus:ring-[var(--color-primary)];
}

.btn-secondary {
@apply bg-[var(--color-secondary)] text-white
hover:opacity-90
focus:ring-[var(--color-secondary)];
}

.btn-outline {
@apply border border-[var(--color-border)]
text-[var(--color-text)]
hover:bg-[var(--color-surface)];
}

.btn-danger {
@apply bg-[var(--color-danger)] text-white
hover:opacity-90
focus:ring-[var(--color-danger)];
}
}

<!-- Links -->

@layer components {
.link {
@apply font-medium
text-sm md:text-base
text-[var(--color-primary)]
hover:underline underline-offset-4;
}

.link-muted {
@apply text-[var(--color-text-muted)]
hover:text-[var(--color-text)];
}
}

<!-- Tags/Badges -->

@layer components {
.tag {
@apply inline-flex items-center
px-2 py-0.5 md:px-2.5 md:py-1
text-xs md:text-sm
font-medium
rounded-[var(--radius-sm)];
}

.tag-primary {
@apply bg-blue-100 text-blue-700;
}

.tag-success {
@apply bg-green-100 text-green-700;
}

.tag-warning {
@apply bg-yellow-100 text-yellow-700;
}

.tag-danger {
@apply bg-red-100 text-red-700;
}
}

<!-- Cards -->

@layer components {
.card {
@apply bg-white
border border-[var(--color-border)]
rounded-[var(--radius-lg)]
p-4 md:p-6 lg:p-8
shadow-sm;
}

.card-title {
@apply text-base md:text-lg
font-semibold mb-2;
}

.card-text {
@apply text-sm md:text-base
text-[var(--color-text-muted)];
}
}
