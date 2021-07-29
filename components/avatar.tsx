function getFirstLetter(name) {
    const splitLetters = name.split(' ');
    const firstLetter = splitLetters[0].split('')[0];
    const secondLetter = splitLetters[1].split('')[0];
    return { firstLetter, secondLetter };
}

export default function Avatar({ name }: avatarProps) {
    const { firstLetter, secondLetter } = getFirstLetter(name);
    console.log('firstLetter, secondLetter', firstLetter, secondLetter);

    return (
        <div className='avatar  bg-secondary'>
            {firstLetter} . {secondLetter}
            <style jsx>
                {`
                    .avatar {
                        border-radius: 50%;
                        padding: 10px;
                        border: none;
                        height: 70px;
                        width: 70px;
                        margin: 0px 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        font-size: 20px;
                    }
                `}
            </style>
        </div>
    );
}

interface avatarProps {
    name: String;
}
