import React from 'react'

const Faqs = () => {
    const faqs = [
        {
            id: 1,
            title: 'How can I manage my events?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis quidem perspiciatis explicabo omnis nostrum accusantium aperiam et. Voluptatibus, necessitatibus error minima quia suscipit quasi facilis quaerat qui provident enim.'
        },
        {
            id: 2,
            title: 'Is BallotChain available in my country?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis quidem perspiciatis explicabo omnis nostrum accusantium aperiam et. Voluptatibus, necessitatibus error minima quia suscipit quasi facilis quaerat qui provident enim.'
        },
        {
            id: 3,
            title: 'How can I vote?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis quidem perspiciatis explicabo omnis nostrum accusantium aperiam et. Voluptatibus, necessitatibus error minima quia suscipit quasi facilis quaerat qui provident enim.'
        },
        {
            id: 4,
            title: 'How do I find an on going election',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis quidem perspiciatis explicabo omnis nostrum accusantium aperiam et. Voluptatibus, necessitatibus error minima quia suscipit quasi facilis quaerat qui provident enim.'
        },
        {
            id: 5,
            title: 'How can I see my election history?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis quidem perspiciatis explicabo omnis nostrum accusantium aperiam et. Voluptatibus, necessitatibus error minima quia suscipit quasi facilis quaerat qui provident enim.'
        },
        {
            id: 6,
            title: 'How do I make sure I get the right events?',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus facilis quidem perspiciatis explicabo omnis nostrum accusantium aperiam et. Voluptatibus, necessitatibus error minima quia suscipit quasi facilis quaerat qui provident enim.'
        },
    ]
  return (
    <div id='faq' className='wrapper py-[30px]'>
      <h1 className='title text-center'>FAQ</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 py-[30px] gap-[40px]'>
        {faqs.map((item) => (
            <div className='flex flex-col gap-5' key={item.id}>
                <h3 className='titleText text-xl'>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Faqs
