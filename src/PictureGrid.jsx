function PictureGrid() {
    return(
            <div className="flex mx-auto py-6 flex-col">
                <div className="flex justify-between"> 
                    <h1 className="font-semibold text-2xl">Appart 6 pers avec piscine</h1>
                    <div className="underline">
                        <a>Enregister</a>
                        <a>Partager</a>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-4 grid-rows-2 gap-2 my-6 relative">
                    <div className="col-span-2 row-span-2">
                        <img className="object-cover h-full rounded-l-lg " src="https://a0.muscache.com/im/pictures/miso/Hosting-770237037525998702/original/72a374ae-ddfc-4156-98fd-c9dce9855e32.jpeg?im_w=960"></img>
                    </div>
                    <div className="col-start-3">
                        <img className="object-cover h-48 w-96" src="https://a0.muscache.com/im/pictures/miso/Hosting-770237037525998702/original/2f34f725-0801-46f6-8c8e-2aaf3d2ed0d8.jpeg?im_w=720"></img>
                    </div>
                    <div className="col-start-4">
                        <img className="object-cover h-48 w-96 rounded-tr-lg" src="https://a0.muscache.com/im/pictures/miso/Hosting-770237037525998702/original/14ace3fa-4f14-4a17-8add-07f1b1a30e00.jpeg?im_w=720"></img>
                    </div>
                    <div className="col-start-3 row-start-2">
                        <img className="object-cover h-48 w-96" src="https://a0.muscache.com/im/pictures/miso/Hosting-770237037525998702/original/f1aee69f-eb14-4537-9713-054e8b2b44f5.jpeg?im_w=720"></img>
                    </div>
                    <div className="col-start-4 row-start-2">
                        <img className="object-cover h-48 w-96 rounded-br-lg" src="https://a0.muscache.com/im/pictures/miso/Hosting-770237037525998702/original/ee1274a1-10b1-4f99-9743-006b01cdab89.jpeg?im_w=720"></img>
                    </div>
                    <div className="absolute right-5 bottom-5 bg-white px-4 py-1 rounded font-medium">
                        <p>Afficher toutes les photos</p>
                    </div>
                </div>

                
            </div>
    )
}


export default PictureGrid;