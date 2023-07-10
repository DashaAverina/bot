import { Image, Text, useRouter } from '@urban-bot/core';
import { buttonsData } from '../MetaCards';
import { Fragment } from 'react';
import { AdditionalOptions } from '../AdditionalOptions';

export const ReachWeight = () => {
    const { query } = useRouter();
    const data = buttonsData?.find((btn, i) => btn?.name === query?.name);

    if (!data) return <AdditionalOptions />;

    return (
        <Fragment>
            <Image file={data?.image} />
            <Text>
                <b>Подивіться уважно на карту, приділіть увагу всім деталям.</b> <br /> <br /> Дивлячись на карту, як
                вважаєте, що може допомогти вам досягти і утримувати бажану вагу?
                <br />
                <br />
                <b>Відповідь запишіть у блокнот</b>❗️
                <br />
                <br />
                <i>
                    Якщо ваше питання лишилось не вирішеним або ви маєте інші запити, то ви можете замовити особисту
                    консультацію, написавши мені в особисті повідомлення
                </i>
            </Text>
            <AdditionalOptions />
        </Fragment>
    );
};
