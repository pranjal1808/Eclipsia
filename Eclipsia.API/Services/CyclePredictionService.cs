using Eclipsia.API.Models;

namespace Eclipsia.API.Services
{
    public class CyclePredictionService
    {
        public DateTime? PredictNextCycle(List<PeriodLog> logs)
        {
            if (logs.Count < 2) return null;
            var sorted = logs.OrderBy(l => l.StartDate).ToList();
            var intervals = new List<int>();
            for (int i = 1; i < sorted.Count; i++)
            {
                intervals.Add((sorted[i].StartDate - sorted[i - 1].StartDate).Days);
            }
            int average = (int)intervals.Average();
            return sorted.Last().StartDate.AddDays(average);
        }
    }
}