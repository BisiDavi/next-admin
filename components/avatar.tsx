function getFirstLetter(name) {
    const splitLetters = name.split(' ');
    const firstLetter = splitLetters[0].split('')[0];
    const secondLetter = splitLetters[1].split('')[0];
    return { firstLetter, secondLetter };
}

export default function Avatar({ name }: avatarProps) {
    const { firstLetter, secondLetter } = getFirstLetter(name);
    return (
        <div className='avatar'>
            {firstLetter} . {secondLetter}
            <style jsx>
                {`
                    .avatar {
                        border-radius: 50%;
                        padding: 10px;
                        border: none;
                        height: 70px;
                        background-color: rgb(57, 63, 78);
                        width: 70px;
                        margin: 0px 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        font-weight: bold;
                        font-size: 20px;
                    }
                    @media (max-width: 768px) {
                        .avatar {
                            display: none;
                        }
                    }
                `}
            </style>
        </div>
    );
}

interface avatarProps {
    name: String;
}
