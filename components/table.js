import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from '../database/data.json'

export default function Table(){
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Interviewer Type</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Home Office</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Grade</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Interviewer Status</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                    {
                        data.map((obj, i) => <Tr {...obj} key={i} />)
                    }
            </tbody>
        </table>
    )
}

function Tr({id, name, type, homeoffice, grade, status }){
    return (
        <tr className="bg-gray-50 text-center">
        <td className="px-16 py-2 flex flex-row items-center">
            <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <span>{type || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <span>{homeoffice || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <span>{grade || "Unknown"}</span>
        </td>
        <td className="px-16 py-2">
            <button className="cursor"><span className="bg-green-500 text-white px-5 py-1 rounded-full">{status || "Unknown"}</span></button>
        </td>
    </tr>
    )
}