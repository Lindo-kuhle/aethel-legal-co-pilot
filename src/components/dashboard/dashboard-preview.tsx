import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const mockCases = [
  {
    id: "CASE-2024-001",
    client: "Sarah Johnson",
    type: "Landlord-Tenant Dispute",
    status: "intake-complete",
    priority: "high",
    lastActivity: "2 hours ago",
    nextAction: "Review generated motion",
    documents: 3
  },
  {
    id: "CASE-2024-002", 
    client: "Michael Chen",
    type: "Contract Review",
    status: "document-review",
    priority: "medium",
    lastActivity: "1 day ago",
    nextAction: "Client consultation scheduled",
    documents: 5
  },
  {
    id: "CASE-2024-003",
    client: "Jennifer Rodriguez", 
    type: "Family Law - Divorce",
    status: "pending-intake",
    priority: "low",
    lastActivity: "3 days ago",
    nextAction: "Complete intake questionnaire",
    documents: 1
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'intake-complete': return 'bg-green-100 text-green-800 border-green-200';
    case 'document-review': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'pending-intake': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case 'high': return <AlertTriangle className="w-4 h-4 text-red-500" />;
    case 'medium': return <Clock className="w-4 h-4 text-yellow-500" />;
    case 'low': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
    default: return null;
  }
};

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-legal-neutral/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Matter-Centric Workspace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organize cases efficiently with AI-powered insights and automated workflow management.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <Card className="shadow-card border-0 mb-8">
            <CardHeader className="bg-gradient-hero text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Practice Dashboard</CardTitle>
                  <CardDescription className="text-white/80">
                    Welcome back, Attorney Johnson
                  </CardDescription>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-legal-gold">12</div>
                    <div className="text-sm text-white/80">Active Cases</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-legal-gold">8</div>
                    <div className="text-sm text-white/80">Pending Review</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-legal-gold">3</div>
                    <div className="text-sm text-white/80">New Intakes</div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Case Management Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {mockCases.map((case_item, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{case_item.client}</CardTitle>
                      <CardDescription className="text-sm font-medium text-muted-foreground">
                        {case_item.id}
                      </CardDescription>
                    </div>
                    {getPriorityIcon(case_item.priority)}
                  </div>
                  
                  <Badge className={`w-fit ${getStatusColor(case_item.status)}`}>
                    {case_item.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Case Type</div>
                    <div className="text-sm text-muted-foreground">{case_item.type}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    {case_item.documents} documents
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Last activity: {case_item.lastActivity}
                  </div>
                  
                  <div className="pt-2 border-t">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Next Action:</div>
                    <div className="text-sm text-foreground">{case_item.nextAction}</div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Open Case
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="default" className="h-16 flex items-center gap-3">
              <Users className="w-5 h-5" />
              New Client Intake
            </Button>
            <Button variant="outline" className="h-16 flex items-center gap-3">
              <FileText className="w-5 h-5" />
              Generate Document  
            </Button>
            <Button variant="outline" className="h-16 flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Schedule Meeting
            </Button>
            <Button variant="outline" className="h-16 flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Time Entry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;