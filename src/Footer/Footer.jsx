

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="text-white text-sm">
                        &copy; 2023 Movie App. All rights reserved.
                    </div>
                    <div className="mt-2 md:mt-0">
                        <a href="#" className="text-white hover:text-blue-500 mr-4">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-white hover:text-blue-500">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
