import { Button, ButtonGroup, Text, useRouter } from '@urban-bot/core';
import { routes } from '../routes/routes';

export function MainMenu() {
    const { navigate } = useRouter();
    return (
        <>
            <Text>
                ❤️❤️❤️<b>Вітаємо тебе на марафоні MyLadySlim!</b>❤️❤️❤️
            </Text>
            <ButtonGroup title="Обери, що тебе цікавить 👇" maxColumns={1} isResizedKeyboard={false}>
                <Button onClick={() => navigate(routes.introduction)} style="PRIMARY">
                    Давай знайомитись
                </Button>
                <Button onClick={() => navigate(routes.calories)}>Розрахувати калорії</Button>
                <Button onClick={() => navigate(routes.water)}>Розрахувати водний баланс</Button>
                <Button url="https://ladyslim.netlify.app/">Генератор Завдань</Button>
                <Button onClick={() => navigate(routes.advices)}>Корисні Поради</Button>
                <Button onClick={() => navigate(routes['advices_after'])}>Поради після марафона</Button>
                <Button onClick={() => navigate(routes.results)}>Найкращі результати</Button>
                <Button onClick={() => navigate(routes.meta_cards)}>Метафоричні карти</Button>
            </ButtonGroup>
        </>
    );
}
