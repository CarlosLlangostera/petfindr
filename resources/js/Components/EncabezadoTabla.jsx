import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

export default function EncabezadoTabla({ nombre, sortable = true, sort_field = null, sort_direction = null, sortChanged = () => {}, children }) {
    return (
        <th onClick={e => sortChanged(nombre)}>
            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                <div>
                    <ChevronUpIcon className={
                        "w-4 " + (sort_field === nombre && sort_direction === 'asc' ? 'text-white' : '')
                    }></ChevronUpIcon>
                    <ChevronDownIcon className={
                        "w-4 -mt-2 " + (sort_field === nombre && sort_direction === 'desc' ? 'text-white' : '')
                    }></ChevronDownIcon>
                </div>
                )}
            </div>
        </th>
    )
}