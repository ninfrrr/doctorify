/**
 * @typedef FindDoctorProps
 * @property {string} [id]
 * @property {string} [nama]
 * @property {string} [spesialisasi]
 * @property {string} [harga]
 * @property {string} [imgdoctor]
 */

/**
 * @param {FindDoctorProps} props
 */
import Button from '@/views/elements/button';
const FindDoctor = ({
    id = '',
    nama = '',
    spesialisasi = '',
    harga = '',
    imgdoctor = ''
}) => {
    return (
        <div className="my-[10px] flex border bg-slate-200">
            <div>
                <img
                    src={imgdoctor}
                    className=" h-[120px] w-[90px] border-2"
                ></img>
            </div>
            <div className="flex w-full flex-col justify-between p-[18px]">
                <div>
                    <p className="text-[16px] font-bold">{nama}</p>
                    <p>{spesialisasi}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[16px] font-medium">Rp{harga}</p>
                    <Button
                        href="/appointment"
                        className="rounded-md px-[16px] py-[3px] text-[16px]"
                    >
                        Buat Janji
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default FindDoctor;
