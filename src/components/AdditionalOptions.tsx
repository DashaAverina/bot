import { ButtonGroup, Button, useRouter } from '@urban-bot/core';
import { Fragment } from 'react';
import { routes } from '../routes/routes';

interface iAdditionalOptions {
    title?: string;
}

/* {activePath !== routes.results && (
                    <Button onClick={() => navigate(routes.results)}>Подивитися кращі результати марафонів</Button>
                )}
                {activePath !== routes.advices && (
                    <Button onClick={() => navigate(routes.advices)}>Подивитися корисні поради</Button>
                )}
                {activePath !== routes['advices_after'] && (
                    <Button onClick={() => navigate(routes['advices_after'])}>
                        Подивитися корисні поради після марафону
                    </Button>
                )} */

export function AdditionalOptions({ title = 'Обери, що тебе цікавить 👇' }: iAdditionalOptions) {
    const { navigate, activePath } = useRouter();
    return (
        <Fragment>
            <ButtonGroup title={title} maxColumns={1}>
                <Button onClick={() => navigate(routes.start)}>Повернутися до головного меню</Button>
            </ButtonGroup>
        </Fragment>
    );
}
