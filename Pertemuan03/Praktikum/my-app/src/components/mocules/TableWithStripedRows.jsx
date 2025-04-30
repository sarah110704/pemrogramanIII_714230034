import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";

const TABLE_HEAD = ["Nama", "Fakultas", "Npm", ""];

export function TableWithStripedRows() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8088/api/mahasiswa')
            .then((response) => {
                setUsers(response.data.data);
            })
            .catch((error) => {
                console.log("Error fetching data: ", error);
            }
            )
    }, [])

    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.npm} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {user.nama}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {user.fakultas}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {user.npm}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        Edit
                                    </Typography>
                                </td>
                            </tr>
                        ))
                    ): 
                        <tr>
                            <td colSpan={TABLE_HEAD.length} className="p-4 text-center text-gray-500">
                                Loading .......
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </Card>
    );
}