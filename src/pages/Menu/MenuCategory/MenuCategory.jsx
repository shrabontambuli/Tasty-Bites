
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='py-10'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-20 my-24">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex justify-center mt-10">
                    <button className="btn btn-outline border border-[#C19977] border-b-4 shadow-md text-white mt-10">Order Now</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;