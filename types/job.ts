export interface Job {
    id: number;
    category: string;
    company_name: string;
    job_role: string;
    website_link?: string;
    state: string;
    city: string;
    experience?: string;
    qualification: string;
    batch?: string;
    salary_package?: string;
    job_description: string;
    key_responsibility?: string;
    about_company?: string;
    selection_process?: string;
    image?: string;
    posted_on: string;
}