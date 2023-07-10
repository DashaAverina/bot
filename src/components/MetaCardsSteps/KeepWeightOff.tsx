import { Button, ButtonGroup, Image, Text, useRouter } from '@urban-bot/core';
import { buttonsData } from '../MetaCards';
import { Fragment } from 'react';
import { AdditionalOptions } from '../AdditionalOptions';
import { routes } from '../../routes/routes';

export const KeepWeightOff = () => {
    const { query, navigate } = useRouter();
    const data = buttonsData?.find((btn, i) => btn?.name === query?.name);

    if (!data) return <AdditionalOptions />;

    return (
        <Fragment>
            <Image file={data?.image} />
            <Text>
                <b>Подивіться уважно на карту, приділіть увагу всім деталям.</b> <br /> <br /> Дивлячись на карту, як
                вважаєте, що заважає вам мати бажану вагу?
                <br />
                <br />
                <b>Відповідь запишіть у блокнот</b>❗️
            </Text>
            <ButtonGroup maxColumns={1} title="Тепер оберіть другу карту">
                {buttonsData
                    .filter((item) => item.name !== query?.name)
                    .map((btn) => (
                        <Button key={btn.name} onClick={() => navigate(routes.reach_weight, { name: btn.name })}>
                            {btn.name}
                        </Button>
                    ))}
            </ButtonGroup>
        </Fragment>
    );
};
