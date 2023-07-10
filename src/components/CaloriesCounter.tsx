import { Text, useText, Image } from '@urban-bot/core';
import { useEffect, useState } from 'react';
import { AdditionalOptions } from './AdditionalOptions';
import fs from 'fs';

const messages = [
    {
        message: `Введіть будь ласка свою вагу, наприклад 60`,
        image: fs.readFileSync('src/assets/counters/weight.jpg'),
    },
    {
        message: `Чудово, тепер введіть свій зріст, наприклад: 168`,
        image: fs.readFileSync('src/assets/counters/height.jpg'),
    },
    {
        message: `Супер, тепер введіть будь ласка свій вік, наприклад: 20`,
        image: fs.readFileSync('src/assets/counters/age.jpg'),
    },
];

export default function CaloriesCounter() {
    const [answers, setAnswers] = useState<number[]>([]);
    const [error, setError] = useState('');
    const [text, setText] = useState('');
    useText(({ text }) => setText((pv) => (pv === text ? pv : text)));

    useEffect(() => {
        if (!text) return;
        if (isNaN(Number(text)) || !isFinite(Number(text))) return setError('❌ Введіть будь ласка валідний номер');

        setError('');
        stateChangeHandler(text);
    }, [text]);

    function isInRange(n: number, min: number, max: number) {
        return n >= min && n <= max;
    }

    const calculateGroup = (count: number) => {
        if (count < 1290) return 1;
        if (isInRange(count, 1290, 1390)) return 2;
        if (isInRange(count, 1391, 1490)) return 3;
        if (isInRange(count, 1491, 1590)) return 4;
        return 4;
    };

    const calculateCaloriesAndWater = () => {
        if (answers.length < 3) return;
        const calories = 655.1 + 9.563 * answers[0] + 1.58 * answers[1] - 4.676 * answers[2];
        return `❤️❤️ Вітаємо, ваша норма калорій ${Math.floor(calories)} на день. Ви відноситесь до ${calculateGroup(
            calories,
        )} категорії 🔥. Тепер ви на крок ближче до гарного результату. 🔥`;
    };

    const stateChangeHandler = (text: string) => {
        const newAnswers: number[] = [...answers];
        newAnswers.push(Number(text));
        setAnswers(newAnswers);
    };

    const showFlow = !error && answers.length < 3;
    const showFinish = !error && answers.length >= 3;
    const isNewMessage = answers.length < 2 && !error;

    return (
        <>
            {showFlow && (
                <>
                    <Image isNewMessageEveryRender={isNewMessage} file={messages[answers.length].image} />
                    <Text simulateTyping={200} isNewMessageEveryRender={isNewMessage}>
                        <b>{messages[answers.length].message}</b>
                    </Text>
                </>
            )}
            {error && <Text isNewMessageEveryRender={false}>{error}</Text>}
            {showFinish && <AdditionalOptions title={calculateCaloriesAndWater()} />}
        </>
    );
}
