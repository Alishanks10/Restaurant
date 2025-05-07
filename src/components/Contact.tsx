export default function Contact() {
    return (
      <>
        <div className="h-[76vh] flex justify-between items-start p-6 gap-6">
          <div className="w-2/5 bg-black bg-opacity-20 h-[55vh] p-6 rounded-lg">
            <h1 className="text-2xl font-semibold mb-2 underline">Our Contact Details:</h1>
            <h3 className="text-lg">
              Phone number: +977 9858394990<br />
              Email: brothersrestaurant@foodservices.com
            </h3>
          </div>
  
          <div className="w-3/5 h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Buddha Stupa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3904192025467!2d85.34408607522538!3d27.721370625701595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199dbb3f180f%3A0x9a00f7d20149fdbb!2sBoudhanath%20Stupa!5e0!3m2!1sen!2snp!4v1715058326320!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
  