import { Button, ButtonGroup, Text, useRouter } from '@urban-bot/core';
import { Fragment } from 'react';
import fs from 'fs';
import { routes } from '../routes/routes';

export const buttonsData = [
    { name: 'Карта 1', image: fs.readFileSync('src/assets/metaCards/metaCards-1.jpg') },
    { name: 'Карта 2', image: fs.readFileSync('src/assets/metaCards/metaCards-2.jpg') },
    { name: 'Карта 3', image: fs.readFileSync('src/assets/metaCards/metaCards-3.jpg') },
    { name: 'Карта 4', image: fs.readFileSync('src/assets/metaCards/metaCards-4.jpg') },
    { name: 'Карта 5', image: fs.readFileSync('src/assets/metaCards/metaCards-5.jpg') },
];

export const MetaCards = () => {
    const { navigate } = useRouter();

    return (
        <Fragment>
            <Text>
                <b>
                    Вже деякий час я використовую метафоричні асоціативні карти в своїх марафонах схуднення. Що це таке?
                    Багато хто одразу думає,що це ворожіння або щось на кшталт таро. Але це НЕ ТАК!!!
                </b>
                <br />
                <br />
                Метафоричні асоціативні карти (скорочено МАК) — це набір зображень завбільшки з гральну карту або
                листівку, що зображають людей, їх взаємодії, життєві ситуації, пейзажі, тварин, предмети побуту,
                абстрактні зображення.
                <br />
                <br />
                МАК це потужний психологічний інструмент, завдяки якому ви можете знайти відповідь на будь яке питання у
                вашому житті, тому що всі відповіді вже є у вашій підсвідомості.
                <br />
                <br />
                Кожна карта для окремої людини буде мати лише своє значення. Принцип роботи з картами ґрунтується на
                методі асоціацій. На який би об`єкт ви не дивились, ви бачити в ньому лише відображення себе, своїх
                думок, почуттів,настроїв.
                <br />
                <br />
                Коли ми працюємо з МАК, дуже важливо правильно скласти запит. Оскільки це не ворожіння,а один з
                психологічних інструментів,то запити формуються наступним чином: <br />
                <br />
                ❌НЕ МОЖНА питати: коли мені буде щастя?
                <br />
                ☑️МОЖНА робити запит: що мені допоможе стати щасливою.
                <br />
                <br />
                ❌НЕ МОЖНА питати: коли я влаштуюсь на роботу?
                <br />
                ☑️МОЖНА робити запит: що мені треба зробити,щоб отримати бажану роботу.
                <br />
                <br />
                ❌НЕ МОЖНА питати: коли я врешті схудну?
                <br />
                ☑️ МОЖНА робити запит: які дії я повинна робити,щоб прийти до бажаної ваги.
                <br />
                <br />
                Думаю принцип зрозумілий. Ми ставимо не питання до карт,а запит.
                <br />
                <br />
                На моїх марафонах схуднення ми будемо користуватись цим потужним інструментом, щоб досягти найбажаніших
                для вас результатів за допомогою вашої підсвідомості.
                <br />
                <br />
                Особисто в мене ще не було таких випадків, щоб не знайшлось правильних шляхів, після роботи з МАК.
            </Text>

            <ButtonGroup maxColumns={1} title="Оберіть першу карту">
                {buttonsData.map((btn) => (
                    <Button key={btn.name} onClick={() => navigate(routes.weight_off, { name: btn.name })}>
                        {btn.name}
                    </Button>
                ))}
            </ButtonGroup>
        </Fragment>
    );
};