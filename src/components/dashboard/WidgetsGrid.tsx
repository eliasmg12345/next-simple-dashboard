'use client'

import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from '../../store/index';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count)

    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                subTitle="Productos Agregados"
                title={`${isCart}`}
                label="Contador"
                icon={<IoCartOutline size={70} className='text-blue-800' />}
                href='/dashboard/counter'
            />
        </div>

    )
}
