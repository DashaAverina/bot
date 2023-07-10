import { Fragment, useEffect, useState } from 'react';
import { AdditionalOptions } from './AdditionalOptions';
import fs from 'fs';
import { Media } from '@urban-bot/core';
import { paginate, sort } from '../helpers/misc';

export function ImagesList({ imagesPath }: { imagesPath: string }) {
    const perAlbum = 10;
    const filenames = fs.readdirSync(imagesPath);
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        const maxAlbums = Math.ceil(filenames.length / perAlbum);
        const newData = paginate({ data: sort(filenames), max: maxAlbums, count: perAlbum });

        newData.length && setData(newData);
    }, []);

    const showContent = !!imagesPath && typeof imagesPath === 'string';

    return (
        <Fragment>
            {showContent &&
                data?.map((item, index) => (
                    <Media
                        key={index + 1}
                        files={item.map((file) => ({ type: 'image', file: `${imagesPath}${file}` }))}
                    />
                ))}
            <AdditionalOptions />
        </Fragment>
    );
}
