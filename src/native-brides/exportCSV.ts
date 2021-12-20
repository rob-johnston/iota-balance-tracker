import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Toast } from '@capacitor/toast';
import converter from 'json-2-csv';
import { iotaAddresses } from '../store/store';


export const exportCSVFile = async () => {
    try {
        const formattedData = Object.entries(iotaAddresses).map(([address, balance]) => ({ address, balance }))
        const csv = await converter.json2csvAsync(formattedData)

        // // print CSV string
        // console.log(csv);
        // const foo = await Filesystem.stat({
        //     directory: Directory.Documents,
        //     path: 'iotabalances.csv'
        // })
        // console.log('Stat: ', foo)

        const contents = await Filesystem.writeFile({
            path: 'iotabalances.csv',
            data: csv,
            directory: Directory.Documents,
            encoding: Encoding.UTF8,
            recursive: true
        })
        console.log(contents)
        console.log('csv successfully saved')
    } catch (e) {
        console.log('error exporting csv')
        console.log(e)
    }
};


export const showToast = async (message: string) => {
    await Toast.show({
        text: message,
    })
}