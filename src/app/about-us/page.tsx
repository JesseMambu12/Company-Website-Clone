import Header from "../components/header";
import Footer from "../components/footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Our Story</h1>
        <p className="text-lg mb-4">
          Our story began in 1971. Back then we were a roaster and retailer of
          whole bean and ground coffee, tea and spices with a single store in
          Seattle&rsquo;s Pike Place Market. Today, we are privileged to connect with
          millions of customers every day in more than 80 markets.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Folklore</h2>
        <p className="text-lg mb-4">
          Starbucks is named after the first mate in Herman Melville&rsquo;s
          “Moby-Dick.” Our logo is also inspired by the sea – featuring a
          twin-tailed siren from Greek mythology.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">
          Mission, Values and Promises
        </h2>
        <h3 className="text-2xl font-medium mt-4">Our Mission</h3>
        <p className="text-lg mb-4">
          With every cup, with every conversation, with every community – we
          nurture the limitless possibilities of human connection.
        </p>

        <h3 className="text-2xl font-medium mt-4">Our Values</h3>
        <ul className="list-disc ml-6 text-lg">
          <li>
            Craft: We delight in the rigor of the details, no matter what our
            job is.
          </li>
          <li>
            Results: We consistently achieve our goals with focus, integrity,
            and drive.
          </li>
          <li>
            Courage: We embrace difficult conversations, with respect, to make
            us all better.
          </li>
          <li>
            Belonging: We actively listen and connect with warmth and
            transparency.
          </li>
          <li>Joy: We take pride in our work and have fun while doing it.</li>
        </ul>

        <h3 className="text-2xl font-medium mt-4">Our Promises</h3>
        <ul className="list-disc ml-6 text-lg">
          <li>Partner Promise — Bridge to a better future.</li>
          <li>Customer Promise — Uplift the everyday.</li>
          <li>Farmer Promise — Ensure the future of coffee for all.</li>
          <li>Community Promise — Contribute positively.</li>
          <li>Environmental Promise — Give more than we take.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Coffee</h2>
        <p className="text-lg mb-4">
          We&rsquo;ve always believed in serving the finest coffee possible. It&apos;s our
          goal for all our coffee to be grown under the highest standards of
          quality, using ethical sourcing practices.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Our Stores</h2>
        <p className="text-lg mb-4">
          Our stores are a neighborhood gathering place for meeting friends and
          family. Our customers enjoy quality service, an inviting atmosphere,
          and an exceptional beverage experience.
        </p>
      </div>
      <Footer />
    </>
  );
}
