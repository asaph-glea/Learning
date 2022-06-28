using System;

namespace gamble
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Enter a random number between 1 and 100:");

            int guess = Convert.ToInt32(Console.ReadLine());

            
            Random rnd = new Random();
            int num = rnd.Next(1, 100);

            
            
            if ( guess%num == 0)
            {
                Console.WriteLine("Win! 100 points");
            }
            
            else if ( guess%2 != 0)
            {
                Console.WriteLine("lOSE !0 Points");
            }
            
            else if (guess%2==0 && guess%num ==0 )
            {
                Console.WriteLine("24 points,Try Again!");
            }
            else 
            {
                Console.WriteLine("invalid try again");
            }

        }
    }
}
