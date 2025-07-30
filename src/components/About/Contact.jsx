const Contact = () => (
  <div className="flex flex-col justify-start translate-x-24" id="contact">
    <h3 className="text-2xl font-bold mb-5 text-slate-800">Contact</h3>
    <div className="space-y-3">
      <p className="text-sm text-slate-900 flex items-center gap-2">
        <i className="fas fa-envelope text-lg"></i>
        jea71882@naver.com
      </p>
      <p>
        <a 
          href="https://github.com/Jay-Youngjae" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-slate-900 flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-github text-lg"></i>
          github.com/Jay-Youngjae
        </a>
      </p>
      <p className="text-sm text-slate-900 flex items-center gap-2">
        <i className="fas fa-phone text-lg"></i>
        010-9087-1832
      </p>
    </div>
  </div>
);

export default Contact;