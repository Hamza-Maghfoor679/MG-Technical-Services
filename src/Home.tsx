import Navbar from "./components/Navbar";
import "./index.css";
import ImageInfoCard from "./components/ImageCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 space-y-10">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Welcome to MG Technical Services
        </h1>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Our Services
        </h1>

        <section>
          <ImageInfoCard
            imageSrc="https://t4.ftcdn.net/jpg/02/20/20/41/360_F_220204174_vfgB0Vo2i4MZ8Sv5hmtsx5IwcvrDCZox.jpg"
            title="Plumbing"
            description="We are proud to work with an extensive network of highly skilled and experienced plumbers, all committed to delivering top-quality service you can rely on. Whether it’s a small repair or a major installation, our team is equipped to handle every job with professionalism, efficiency, and care. By partnering with a large number of trusted professionals, we ensure 
            that help is always nearby—ready to meet your plumbing needs quickly and effectively.."
            imagePosition="left"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://onepullwire.com/wp-content/uploads/2022/02/10-Specializations-Comm-Electricians.jpeg"
            title="Electrical"
            description="We work with a trusted network of licensed and experienced electricians to deliver safe, reliable, and high-quality electrical services. From simple fixes to full-scale installations, our team is equipped to handle projects of all sizes with attention to detail and a commitment to safety. With professionals ready to respond quickly, we make it easy to get the expert help you need—right when you need it."
            imagePosition="right"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://media.istockphoto.com/id/508449768/photo/painter-painting-with-paint-roller.jpg?s=612x612&w=0&k=20&c=m-vuBg8Tx0yMT4j1nTeUnd6MK8ivb9TKgqW2D3akPkE="
            title="Paint"
            description="We partner with a team of skilled and experienced painters to bring new life to your spaces—inside and out. Whether you're refreshing a single room or giving your entire property a makeover, our professionals deliver clean, precise, and long-lasting results. With a focus on quality craftsmanship and attention to detail, we ensure every project is completed on time and to your satisfaction."
            imagePosition="left"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://i.pinimg.com/736x/e7/34/44/e73444e931e62addbe455ac68001b026.jpg"
            title="Ceiling and Wall Paneling"
            description="Our team of experienced professionals specializes in ceiling and wall paneling solutions that enhance both the look and feel of your space. Whether you're aiming for a modern, classic, or custom design, we deliver high-quality finishes with precise installation. From decorative wall accents to functional ceiling panels, we work with durable materials to ensure long-lasting results that transform your interior with style and sophistication."
            imagePosition="right"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://www.bromleypropertycompany.com/wp-content/uploads/2021/08/modern-staircase-640x320.jpg"
            title="Glass Work"
            description="We offer expert glass work solutions tailored to elevate both residential and commercial spaces. From custom glass installations and partitions to windows, doors, and decorative features, our skilled professionals deliver precise craftsmanship and high-quality finishes. Whether you're looking to add a modern touch or improve functionality, our glass specialists ensure every project is completed with safety, style, and attention to detail."
            imagePosition="left"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw086TDgt3-L_heXlfmoiQj7aiMWtoz7voMg&s"
            title="Wood Work"
            description="Our skilled carpenters provide high-quality wood work services tailored to suit your space and style. From custom furniture and cabinetry to doors, shelving, and decorative features, we focus on precision, durability, and craftsmanship in every detail. Whether you're enhancing your home or outfitting a commercial space, our team delivers beautiful, functional wood solutions designed to last."
            imagePosition="right"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://wallsanddreams.com/wp-content/uploads/2024/10/image2-2.jpg"
            title="Construction"
            description="We provide end-to-end construction services designed to bring your vision to life—safely, efficiently, and on schedule. From residential builds and commercial projects to renovations and structural upgrades, our experienced team manages every phase with precision and care. With a strong focus on quality, compliance, and craftsmanship, we ensure that each project is delivered to the highest standards, no matter the scale or complexity."
            imagePosition="left"
          />
        </section>
        <section>
          <ImageInfoCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgP1VG2LamLvJIcYw7JdMQ_SPCR63QWZybnQ&s"
            title="Home Appliances Installation"
            description="Our expert technicians provide fast and reliable installation services for all major home appliances. Whether it’s a new washing machine, refrigerator, oven, or dishwasher, we ensure each appliance is installed correctly and safely, following all manufacturer guidelines. With attention to detail and a commitment to customer satisfaction, we make sure your appliances are up and running smoothly from day one."
            imagePosition="right"
          />
        </section>
        <Link to="/contact" className="text-gray-900 text-bold hover:text-blue-600">
          Contact Us
        </Link>
      </main>
    </div>
  );
};

export default Home;
