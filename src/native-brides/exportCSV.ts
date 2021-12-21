import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Toast } from '@capacitor/toast';
import { json2csvAsync } from 'json-2-csv';
import { iotaAddresses } from '../store/store';

export const exportCSVFile = async (data: Object[]) => {
    try {
        const formattedData = Object.entries(data).map(([address, balance]) => ({ address, balance }))
        const csv = await json2csvAsync(formattedData)
        console.log(csv)
        await Filesystem.writeFile({
            path: 'iotabalances.csv',
            data: csv,
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        })
        await showToast("File downloaded to Documents folder");

    } catch (e) {
        await showToast('Error exporting file')
    }
};

export const showToast = async (message: string) => {
    await Toast.show({
        text: message,
    })
}