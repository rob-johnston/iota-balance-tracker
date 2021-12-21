import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Toast } from '@capacitor/toast';
import { json2csvAsync } from 'json-2-csv';
import { Capacitor } from '@capacitor/core';
import { FILE_NAME, MESSAGES } from '../constants';


async function saveFile(csv: string) {
    if (Capacitor.isNativePlatform()) {
        await Filesystem.writeFile({
            path: FILE_NAME,
            data: csv,
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
        })
        await showToast(MESSAGES.FILE_DOWNLOADED);
    } else {
        // capacitor filesystem plugin doesnt seem to handle web downloads so just 
        // do it manually
        let link = document.createElement("a");
        if (link.download !== undefined) {
            const blob = new Blob([csv])
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", FILE_NAME);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

export const exportCSVFile = async (data: Object[]) => {
    try {
        const formattedData = Object.entries(data).map(([address, balance]) => ({ address, balance }))
        const csv = await json2csvAsync(formattedData)
        saveFile(csv)

    } catch (e) {
        await showToast(MESSAGES.EXPORT_ERROR)
    }
};

export const showToast = async (message: string) => {
    await Toast.show({
        text: message,
    })
}