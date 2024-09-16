

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex justify-between space-x-2">
            <div className="flex items-start gap-5">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} alt="" />
                <div>
                    <h3 className="uppercase text-white">{name}----------</h3>
                    <p className="text-slate-400 mt-4">{recipe}</p>
                </div>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;