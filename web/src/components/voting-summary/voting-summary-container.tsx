import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

export type VotingSummaryContainerProps = {
  storyTitle: string;
  onShowCards?: () => void;
  onPieChartClick?: () => void;
  onBarChartClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function VotingSummaryContainer({
  storyTitle,
  onShowCards,
  onPieChartClick,
  onBarChartClick,
  className,
  children,
}: VotingSummaryContainerProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader className="text-center">
        <CardTitle>{storyTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={onShowCards}
        >
          Show Cards
        </Button>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onPieChartClick}
            aria-label="Pie chart view"
          >
            <PieChart />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onBarChartClick}
            aria-label="Bar chart view"
          >
            <BarChart3 />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

