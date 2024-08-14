import { useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      if (data && data.products && data.products.length) {
        setData(data.products);
        setIsLoading(false);
      }
    } catch (er) {
      console.log(er);
      setError(er.message);
      setIsLoading(false);
    }
  };

  const handleScrollPercentage = () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    const { scrollHeight, clientHeight } = document.documentElement;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(Math.round(scrollPercentage));
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(`Scroll Percentage: ${scrollPercentage}%`);

  if (isLoading) {
    return (
      <div style={{ fontWeight: "600", fontSize: "18px" }}>Loading...</div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="scroll-progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => (
              <p style={{ fontWeight: "600" }} key={item.id}>
                {item.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
