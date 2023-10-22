import './MyLabel.css';

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
}

const MyLabel = ({ label, size = 'normal' }: Props) => {
  return <span className={`${size}`}>{label}</span>;
};

export default MyLabel;
