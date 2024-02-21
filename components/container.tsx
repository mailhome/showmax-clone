import { cn } from "@/lib/utils";


interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({
    children,
    className
}: ContainerProps) => {
  return (
    <div className={cn("2xl:max-w-[2520px] xl:max-w-screen-2xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto py-2 lg:py-4 lg:px-20 md:px-12 px-8 ", className)}>
        { children }
    </div>
  )
}

export default Container