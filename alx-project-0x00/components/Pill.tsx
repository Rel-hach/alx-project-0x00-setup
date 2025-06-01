import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title, variant = 'primary' }) => {
    const variantClasses = {
        primary: 'bg-indigo-100 text-indigo-800',
        secondary: 'bg-emerald-100 text-emerald-800',
        tertiary: 'bg-amber-100 text-amber-800',
    };

    return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
            {title}
        </div>
    )
}

export default Pill;