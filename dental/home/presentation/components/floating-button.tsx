import {HugeiconsIcon} from "@hugeicons/react";
import {WhatsappIcon} from "@hugeicons/core-free-icons";

export default function FloatingButton() {
    return (
        <a
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-[var(--green-500)] hover:bg-[var(--green-600)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            href="#"
        >
            <HugeiconsIcon icon={WhatsappIcon} size={28} />
        </a>
    );
}