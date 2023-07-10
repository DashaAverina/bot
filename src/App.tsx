import { Route, Router } from '@urban-bot/core';
import { MainMenu } from './components/MainMenu';
import Introduction from './components/Introduction';
import CaloriesCounter from './components/CaloriesCounter';
import { WaterCounter } from './components/WaterCounter';
import { routes } from './routes/routes';
import { ImagesList } from './components/ImagesList';
import { MetaCards } from './components/MetaCards';
import { KeepWeightOff } from './components/MetaCardsSteps/KeepWeightOff';
import { ReachWeight } from './components/MetaCardsSteps/ReachWeight';

const imagesData = {
    rules: 'src/assets/rules/',
    results: 'src/assets/bestResults/',
    advices: 'src/assets/advices/',
};

export function App() {
    return (
        <Router>
            <Route path={routes.start}>
                <MainMenu />
            </Route>
            <Route path={routes.introduction}>
                <Introduction />
            </Route>
            <Route path={routes.calories}>
                <CaloriesCounter />
            </Route>
            <Route path={routes.water}>
                <WaterCounter />
            </Route>
            <Route path={routes.advices}>
                <ImagesList imagesPath={imagesData.rules} />
            </Route>
            <Route path={routes['advices_after']}>
                <ImagesList imagesPath={imagesData.advices} />
            </Route>
            <Route path={routes.results}>
                <ImagesList imagesPath={imagesData.results} />
            </Route>
            <Route path={routes.meta_cards}>
                <MetaCards />
            </Route>
            <Route path={routes.weight_off}>
                <KeepWeightOff />
            </Route>
            <Route path={routes.reach_weight}>
                <ReachWeight />
            </Route>
        </Router>
    );
}
