import TypingText from "./ui/shadcn-io/typing-text";

export default function TypingEffect({ text }: { text: string }) {

    return (
        <TypingText
            text={[text, text, text, text, text, text, text]}
            typingSpeed={60}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="h-12"
            variableSpeed={{ min: 50, max: 120 }}
        />
    );
}
