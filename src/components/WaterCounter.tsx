import { Image, Text, useText } from '@urban-bot/core';
import { Fragment, useState } from 'react';
import { AdditionalOptions } from './AdditionalOptions';
import fs from 'fs';

export function WaterCounter() {
    const [text, setText] = useState('');
    useText(({ text }) => setText(text));

    const calculateWaterBalance = (n: string) => {
        if (isNaN(Number(n)) || !isFinite(Number(n))) return '❌ Введіть будь ласка валідне число';
        return `👍👍 Вітаємо, ваша норма води на день складає ${
            Number(n) * 30
        } мл. ❗️❗️  Випивати свою норму води дуже важливо для процесу схуднення.`;
    };

    return (
        <Fragment>
            {!text && (
                <>
                    <Image file={fs.readFileSync('src/assets/counters/water.jpg')} />
                    <Text>
                        <b>Введіть будь ласка свою вагу, наприклад 60</b>
                    </Text>
                </>
            )}
            {text && <AdditionalOptions title={calculateWaterBalance(text)} />}
        </Fragment>
    );
}
