import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    description: string;
    features: string[];
    benefits: string[];
    technologies: string[];
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, title, content }) => {
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-text font-heading"
                >
                  {title}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {content.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-lg mb-3 text-text">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {content.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-heading font-semibold text-lg mb-3 text-text">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {content.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full" />
                        <span className="text-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-lg mb-3 text-text">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {content.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary bg-opacity-20 rounded-full text-sm text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="inline-flex items-center justify-center bg-accent hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ServiceModal;