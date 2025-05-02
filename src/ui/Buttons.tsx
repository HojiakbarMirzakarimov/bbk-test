import Button from '@mui/material/CardActionArea';

interface ButtonOrangeProps {
    icon: string;
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonOrange({ icon, text, onClick }: ButtonOrangeProps) {
    return (
        <button className="btn_orange" onClick={onClick}>
            <Button>
                <img src={icon} alt="" />
                {text}
            </Button>
        </button>
    )
}

interface ButtonGrayProps {
    filterIcon: string;
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function ButtonGray({ filterIcon, text, onClick }: ButtonGrayProps) {
    return (
        <button className="btn_gray" onClick={onClick}>
            <Button>
                <img src={filterIcon} alt="" />
                {text}
            </Button>
        </button>
    )
}
