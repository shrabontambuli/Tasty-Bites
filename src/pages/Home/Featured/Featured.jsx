import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-24">
            <div className="bg-slate-900 opacity-75 h-full pt-8">
                <div>
                    <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
                </div>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn btn-outline border border-[#C19977] border-b-4 shadow-md mt-10 text-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;