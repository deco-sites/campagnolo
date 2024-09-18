import { Picture, Source } from "apps/website/components/Picture.tsx";
import { ImageWidget as Image, TextArea } from "apps/admin/widgets.ts";

export interface Props {
    image: Image
    imageMobile: Image
    textBanner: TextArea 
}

export default function Banner ({ image, imageMobile, textBanner }: Props) {
    return (
        <div className="relative w-full h-min sm:mt-24">
            <Picture>
                <Source
                    media="(max-width: 768px)"
                    src={ image }
                    width={270}
                    height={377}
                />
                <Source
                    media="(min-width: 768px)"
                    src={ imageMobile }
                    width={800}
                    height={1200}
                />
                <img
                    src={ image }
                    className="w-full h-full max-w-full object-contain"
                />
            </Picture>
            <div className="hidden sm:flex absolute top-1/2 left-[180px] transform -translate-y-1/2 z-10 w-[450px] backdrop-blur-2xl bg-transparent">
                <div className="p-6 text-slate-100 text-3xl font-bold">
                    {textBanner}
                </div>
            </div>
        </div>
    )
}